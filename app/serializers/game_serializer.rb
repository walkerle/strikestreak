class GameSerializer < ActiveModel::Serializer
  attributes :id, :game_session_id, :first_frame_1, :first_frame_2, :second_frame_1, :second_frame_2, :third_frame_1, :third_frame_2, :fourth_frame_1, :fourth_frame_2, :fifth_frame_1, :fifth_frame_2, :sixth_frame_1, :sixth_frame_2, :seventh_frame_1, :seventh_frame_2, :eighth_frame_1, :eighth_frame_2, :ninth_frame_1, :ninth_frame_2, :tenth_frame_1, :tenth_frame_2, :tenth_frame_3, :score, :notes
end
