# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


house = House.create(house_address: "testhouseadress")
guest = Guest.create(name: "nametest", phone_number: "phonenumbertest",guest_address: "guestsaddresstest",email: "emailtest",time_line:"timelinetest", comment:"commenttest", house_id:2)
guest_two = Guest.create(name: "nametestwo", phone_number: "phonenumbertestwo",guest_address: "guestsaddresstesttwo",email: "emailtesttwo",time_line:"timelinetesttwo", comment:"commenttesttwo", house_id:3)