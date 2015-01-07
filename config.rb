###
# Compass
###

# Change Compass configuration
# don't use caching during development, it will force css rewrites as you go.
compass_config do |config|
   config.output_style = :compact
   config.css_dir = 'css'
   config.cache = 'false'
end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#

# we put the linked pages in this directory so we don't clutter up the main
# directory.
with_layout :stuff do
   page "/stuff/*"
end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
configure :development do
   activate :livereload
end

# bootstrap helper templating
activate :bh

# fire up rouge (may need to be put in :build
# currently have issues with rouge line number code until we can reflow
# containers.
activate :syntax

# rather handy
activate :directory_indexes

#activate :navtree do | options |
#  options.ignore_dir = ['css']
#  options.ignore_files = ['favicon.ico', 'ewe2.ninja.png', 'robots.txt']
#  options.automatic_tree_updates = false
#end

# we need to do this apparently for navtree
#config.ignored_sitemap_matchers[:layout] = proc { |file|
#  file.start_with?(File.join(config.source, 'layouts/'))
#}

# this gets dealt with in the compass config
#set :css_dir, 'css'

set :js_dir, 'js'
set :images_dir, 'images'

# markdown. move to redcarpet because it supports stuff we need.
set :markdown, :tables => true, :autolink => true, :fenced_code_blocks => true, with_toc_data: true, disable_indented_code_blocks: true, :strikethrough => true, :highlight => true, :footnotes => true, :no_intra_emphasis => true
set :markdown_engine, :redcarpet

# Easier boostrap navbars
activate :bootstrap_navbar do | bootstrap_navbar |
  bootstrap_navbar.bootstrap_version = '3.2.0'
end


# Grabbed from the middleman forum, nav_link_to precomputes active links for
# us, which saves on having to generate hardcoded navigation lists. 
#
# get_page_title can grab out one if we need it.
#
# table_of_contents SHOULD work but unfortunately doesn't.
#
# comment is a way to comment multiline erb without saying "if false"
helpers do
  def nav_link_to(link, url, opts={})
    if current_resource.url == url_for(url)
      prefix = '<li class="active">'
    else
      prefix = '<li>'
    end
    prefix + link_to(link, url, opts) + "</li>"
  end
  
  def get_page_title
    yield_content(:title) || current_page.data.title
  end

  def table_of_contents(resource)
    content = File.read(resource.source_file)
    toc_renderer = Redcarpet::Render::HTML_TOC.new
    markdown = Redcarpet::Markdown.new(toc_renderer, nesting_level: 2) # nesting_level is optional
    markdown.render(content)
  end
  
  def comment
  end
end


# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  #activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster. asset_hash is a bit ott
  activate :cache_buster

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

# our deployment
activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.host   = 'ewe2.ninja'
  deploy.path   = '/var/www/html'
  # Optional Settings
  deploy.user  = 'ewe2' # no default
  # deploy.port  = 5309 # ssh port, default: 22
  # do this at least once
  deploy.clean = false # remove orphaned files on remote host, default: false
  # deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
end
