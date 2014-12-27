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
activate :syntax, line_numbers: true

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

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

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
