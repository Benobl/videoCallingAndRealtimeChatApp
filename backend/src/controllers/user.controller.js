export async function getRecommendedUsers(req,res){
try {

    const currentUserId=req.user.id;
    const currentUser=req.user;

    const recommendedUsers=await User.find({$and:[
        {_id:{$ne:currentUserId}},//Exclude current user
        {$id:{$nin:currentUser.friends}},//exclude current User friends
        {isOnboarded:true}
    ]});
    res.status(200).json(recommendedUsers)
} catch (error) {
console.error("Error in getRecommendedUsers controller",error.message)
res.status(500).json({message:"Internal Server Error"})
}
}
export async function getMyFriends(req,res){

try {
  const currentUser = await User.findById(req.user.id).select(friends).populate("friends","fullName profilePic nativeLanguage learningLanguage");
  res.status(200).json(user.friends)
} catch (error) {
console.log('Error in getMyfriends controller',error.message);
res.status(500).json({message:"Internal Server Error"})
}
}
