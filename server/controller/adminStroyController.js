const StoryModel = require("../models/Story");

exports.addStory = async (req, res) => {
    try {
        const files = req.files;
        const { title, desc } = req.body;

        console.log(files);

        if (!files || files.length === 0) return res.status(400).json({ message: 'Image is required' });

        const file = files[0];

        const base64Img = file.buffer.toString('base64');
        const url = `data:${file.mimetype};base64,${base64Img}`;

        const newStory = await StoryModel.create({
            title: title,
            description: desc,
            image: url,
        });

        res.status(200).json({ newStory });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to save story' });
    }
};



exports.getStory = async (req,res) => {
    try {
        let allStory = await StoryModel.find({}).exec()

        res.status(200).json(allStory)
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Failed to get story"}) 
    }
}


exports.deleteStory = async (req,res) => {
    try {
        const {storyId} = req.params;
        console.log("id",storyId);
        const deleteStory = await StoryModel.findByIdAndDelete(storyId).exec();

        console.log("delete ", deleteStory);

        if (!deleteStory) {
            return res.status(404).json({ message: 'Story not found' });
        }

        return res.status(200).json({ message: 'Story deleted successfully' });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

