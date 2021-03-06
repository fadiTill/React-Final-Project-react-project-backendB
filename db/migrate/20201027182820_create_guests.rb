class CreateGuests < ActiveRecord::Migration[6.0]
  def change
    create_table :guests do |t|
      t.string :name
      t.string :phone_number
      t.string :guest_address
      t.string :email
      t.string :time_line
      t.string :comment
      t.references :house, null:false, foreign_key: true


      t.timestamps
    end
  end
end
