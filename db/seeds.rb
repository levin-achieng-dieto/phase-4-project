
 puts"Start seeding...."

#  Review.destroy_all
 House.destroy_all

house1 = House.create(name: "Bungalow", image_url: "https://i.postimg.cc/cLb52STf/1.jpg", price: 200000)
house2 = House.create(name: "Mill House", image_url: "https://i.postimg.cc/htDf6Fh4/Cottage-Design.jpg", price: 350000)
house3 = House.create(name: "Orchad House", image_url: "https://i.postimg.cc/NGdVmmTN/Dover-Pool-House-Patrick-Ahearn-Architect.jpg", price: 1200000)
house4 = House.create(name: "The Laurels", image_url: "https://i.postimg.cc/gc17gdSR/Southampton-Home-Ashley-Darryl-Interiors.jpg", price: 500000)
house5 = House.create(name: "Honeysuckle Cottage", image_url: "https://i.postimg.cc/4dWQjvQn/Abandoned-buildings-that-you-can-actually-buy.jpg", price: 670000)
house6 = House.create(name: "Yew Tree Cottage", image_url: "https://i.postimg.cc/gkW34TW4/Neodesha-Kansas-Victorian-Home.jpg", price: 459000)
house7 = House.create(name: "Greenacres", image_url: "https://i.postimg.cc/Nf3SNY0S/Christ-Family-Country-Life.jpg", price: 321000)


#  reviews = Review.create([
#     {
#         title: 'Excellent',
#         description: 'studio apartment was spacious, clean and had everything i needed',
#         score: 10,
#         house_id: House.first.id, 
#         user_id: User.first.id 
#     },
#     {
#         title: "Perfect",
#         description: "Has all the amenities",
#         score: 7,
#         house_id: House.second.id, 
#         user_id: User.last.id 
#     },
#     {
#         title: 'Average',
#         description: 'comfortable to live in',
#         score: 5,
#         house_id: House.first.id, 
#         user_id: User.first.id 
#     },
#     {
#         title: 'Very good',
#         description: 'Spacious rooms and good lighting',
#         score: 8,
#         house_id: House.last.id, 
#         user_id: User.third.id 
#     },
#     {
#         title: 'Horrible',
#         description: 'Dark lit staircases and poor drainage.',
#         score: 3,
#         house_id: House.third.id, 
#         user_id: User.second.id 
#     },
#     {
#         title: 'Good',
#         description: 'Accessible from the main road',
#         score: 5,
#         house_id: House.first.id, 
#         user_id: User.first.id 
#     },
#     {
#         title: 'Awesome',
#         description: 'Has great views of the city centre.',
#         score: 7,
#         house_id: House.last.id, 
#         user_id: User.last.id 
#     },
#     {
#         title: 'Perfect',
#         description: 'fit for a family',
#         score: 8,
#         house_id: House.third.id, 
#         user_id: User.last.id 
#     },
#     {
#         title: 'Excellent',
#         description: 'Ample parking space and operating lifts.',
#         score: 7,
#         house_id: House.second.id, 
#         user_id: User.first.id 
#     },
#     {
#         title: 'Satisfactory',
#         description: 'Has the bare minimum amenities',
#         score: 6,
#         house_id: House.last.id, 
#         user_id: User.second.id 
#     },

# ])


puts "Done seeding."


