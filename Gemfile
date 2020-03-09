# If you do not have OpenSSL installed, update
# the following line to use "http://" instead
#
# also middleman depends on this file to require things so even if you have
# them installed put them here!
source 'https://rubygems.org'

# test the newer middleman
gem "middleman", "~>4.2.0"
# good for prototyping but not flexible enough for production
#gem "middleman-bootstrap-navbar"
gem "middleman-livereload", "~> 3.4.0"
gem "middleman-syntax"
gem "middleman-rsync"
gem "middleman-autoprefixer"

# nice idea, but limited to a specific use case which additionally requires
# extra work to avoid errors, and the author doesn't understand the problem.
#gem "middleman-navtree"

# For faster file watcher updates on Windows:
#gem "wdm", "~> 0.1.0", :platforms => [:mswin, :mingw]

# Windows does not come with time zone data
#gem "tzinfo-data", platforms: [:mswin, :mingw]

# compass and haml templating and tilt. put dependencies even if they're
# already known to force up to date behaviour

#gem "compass", "~>1.0.1"
gem "haml", "~>5.0.0"

gem "actionpack", "~>5.0.0"
gem "activesupport", "~>5.0.0"

# tilt has to be 1.4.1 for middleman.
gem "tilt"
gem "sass"
gem "redcarpet"

# susy in case we need to do something odd with layout, we'd also like
# role-haml but that is in dependency hell
#gem "susy"

# bh helper, we probably wont need this actually but keep it.
gem 'bh', "~>1.3.0"

# try to eradicate some dumb dependency rubbish
gem 'thor', '~> 0.20.0'
gem 'rack', '~> 2.0.0'
