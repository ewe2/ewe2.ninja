###
# Compass
###

# Change Compass configuration
compass_config do |config|
   config.output_style = :compact
   config.css_dir = 'css'
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
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

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

# Methods defined in the helpers block are available in templates
# helpers do
#   def some_helper
#     "Helping"
#   end
# end

# this gets dealt with in the compass config
#set :css_dir, 'css'

set :js_dir, 'js'
set :images_dir, 'images'

# markdown
set :markdown_engine, :kramdown


# Methods defined in the helpers block are available in templates
helpers do
  def tag_list(array, prefix="/blog")
    array ||= []
    array = [*array.split(/\s+,\s+/)].compact unless array.is_a? Array
    array.map{|tag| link_to tag, "#{prefix}/tags/#{tag}/" }.join ", "
  end

  def nav_link(name, url, options={})
    options = {
      class: "",
      active_if: url,
      page: current_page.url,
    }.update options
    active_url = options.delete(:active_if)
    active = Regexp === active_url ? current_page.url =~ active_url : current_page.url == active_url
    options[:class] += " active" if active

    link_to name, url, options
  end

  def blog_link(article)
    if article.data.link
      "#{link_to article.title, article.data.link} <span class=\"external-link\">&raquo;</span>"
    else
      link_to article.title, article
    end
  end

  def permalink(article)
    link_to "&infin;", article, title:"Permalink"
  end

  def get_page_title
    yield_content(:title) || current_page.data.title
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
