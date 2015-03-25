class HomeController < ApplicationController
    def index
        @anchor = "main"    
    end
    
    def switch
        query = params[:query].to_s
        resultHTML = ""
        if query == "team"
            resultHTML = "<%= escape_javascript(render :partial => 'team' ) %>"
        else
            resultHTML = "<%= escape_javascript(render :partial => 'platform' ) %>"
        end
		render :text => resultHTML
    end
end
