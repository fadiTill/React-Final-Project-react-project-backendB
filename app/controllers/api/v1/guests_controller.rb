class Api::V1::GuestsController < ApplicationController
# before_action :set_house



    def index
         @house = House.find(params[:house_id])
        @guests = @house.guests
        render json: @guests
    end 


    def create
         @house = House.find(params[:house_id])
        @guest = @house.guests.create(guest_params)
        if @guest.save
            # render json: @guest
            # for  House Reducer 
            render json: @house
          
        else
            render json: {error: 'Error creating guest'}
     end 
    end


    def show
        @guest = Guest.find(params[:id])
        render json: @Guest
    end 


    def destroy
         @house = House.find(params[:house_id])
        @guest = guests.find(params[:id])
        @guest.destroy
    end 


    # t.string :name
    # t.string :phone_number
    # t.string :guest_address
    # t.string :email
    # t.string :time_line
    # t.string :comment
    # t.references :house, null:false, foreign_key: true




    private

    # def set_house
    #     @house = House.find(params[:house_id])
    # end


    def guest_params
        params.require(:guest).permit(:name, :phone_number, :guest_address, :email, :time_line, :comment, :house_id) 
    end 
end
