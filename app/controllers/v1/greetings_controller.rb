class V1::GreetingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'some-things',
        guid: '0415674d-a0e8-4748-af68'
      }
    ] }.to_json
  end
end