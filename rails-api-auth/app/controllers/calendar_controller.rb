class CalendarController < ApplicationController
  def index
    if decoded_token.empty?
      render json: []
    else
      events = calendar_api.list_events('primary', options: { authorization: user_credentials })

      render json: events.to_h
    end
  end
end

