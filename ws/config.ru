require 'rack'
require 'thin'
require './app'

Faye::WebSocket.load_adapter('thin')
thin = Rack::Handler.get('thin')
thin.run(App, :Port => 8880)