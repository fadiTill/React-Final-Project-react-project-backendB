class  Api::V1::HousesController < ApplicationController

    def index
        @houses = House.all
        render json: @houses
    end 


    def create
        @house = House.new(house_params)
        if @house.save
            render json: @house
        else
            render json: {error: 'Error creating account'}
     end 
    end


    def show
        @house = House.find(params[:id])
        render json: @house
    end 


    def destroy
        @house = House.find(params[:id])
        @house.destroy
    end 

    private
    def house_params
        params.require(:house).permit(:address)
    end 

end
