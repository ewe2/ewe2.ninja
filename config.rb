###
# Compass
###

# Change Compass configuration
# don't use caching during development, it will force css rewrites as you go.
#require 'susy'
#compass_config do |config|
#   config.output_style = :compact
#   config.css_dir = 'css'
#   config.cache = 'false'
#end

###
# Page options, layouts, aliases and proxies
###

# we put the linked pages in this directory so we don't clutter up the main
# directory.
page "/stuff/*", :layout => "stuff"



###
# Helpers
###

# Reload the browser automatically whenever files change
configure :development do
   activate :livereload
end

# bootstrap helper templating
activate :bh

activate :syntax

# rather handy
activate :directory_indexes

# goodbye compass
activate :autoprefixer

set :js_dir, 'js'
set :images_dir, 'images'

# markdown. redcarpet is over-complicated, kramdown does enough.
set :markdown_engine, :kramdown

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

  # ignore our testbed when building
  ignore "/test.haml"
end

# our deployment
#activate :deploy do |deploy|
#  deploy.method = :rsync
#  deploy.host   = 'ewe2.ninja'
#  deploy.path   = '/var/www/test'
# # Optional Settings
#  deploy.user  = 'ewe2' # no default
#  deploy.port  = 1026 # ssh port, default: 22
  # do this at least once
#  deploy.clean = false # remove orphaned files on remote host, default: false
#  deploy.flags = '-rltgoDvzO --no-p --del' # add custom flags, default: -avz
end

activate :rsync do |rsync|
  rsync.production_server = "ewe2.ninja"
  rsync.path = "/var/www/test/"
  rsync.user = "ewe2"
  rsync.flags = "-rltgoDvzO --no-p --del"
end
