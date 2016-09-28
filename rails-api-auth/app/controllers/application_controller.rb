class ApplicationController < ActionController::API

protected
  def decoded_token
    bearer, token = request.authorization.to_s.split

    if bearer == "Bearer"
      JWT.decode(token, Rails.application.secrets.secret_key_base, true, { :algorithm => 'HS256' }).first
    else
      {}
    end
  end

  def user_api
    Google::Apis::PlusV1::PlusService.new
  end

  def calendar_api
    Google::Apis::CalendarV3::CalendarService.new
  end

  def user_credentials
    @authorization ||= GOOGLE_AUTHORIZATION.dup.tap do |auth|
      auth.redirect_uri = oauth2callback_url
      auth.update_token!(decoded_token)
    end
  end
end
