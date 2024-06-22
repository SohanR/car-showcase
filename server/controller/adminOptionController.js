const OptionModel = require('./../models/Options')

exports.update = async (req,res) => {
    
    try {
        const {field, value} = req.body

        const updateData = {};
        updateData[field] = value;

        console.log("update data", updateData);
        const updateOption = await OptionModel.updateMany(
            {},
            {
                $set:updateData,
            },
            { new: true, upsert: true }
        ).exec()

        console.log("update option", updateOption);

        res.status(200).json({message:"Updated", updateOption})
    } catch (error) {
        console.log(error);

        res.status(500).json({message:"Error updating"})
    }
}


exports.createDefault = async (req, res) => {
    try {
        // Create an empty object with default values for all fields
        const defaultOptions = {
            make: [],
            model: [],
            category: [],
            driveType: [],
            fuelType: [],
            cylinder: [],
            transmission: [],
            color: [],
            subType: [],
            cc: [],
            loadingCapacity: [],
            steering: [],
            port: [],
            bodyType: []
            // Add more fields as needed with default empty arrays
        };

        // Create a new document with default empty arrays
        const newOptions = await OptionModel.create(defaultOptions);

        res.status(201).json({ message: "Default options created", newOptions });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating default options" });
    }
};

exports.getOptions = async (req,res) => {
    try {
        const {field} = req.body

        console.log(field);
        

        const schemaField = Object.keys(OptionModel.schema.paths).includes(field) ? field : null ;

        console.log(schemaField);

        if(!schemaField) return res.status(400).json({message:'invalid field name'});

        const doc = await OptionModel.findOne(
            {},
            {
                [schemaField]: 1, _id:0
            }
        )

        console.log(doc);

        const fieldValue = doc[schemaField]

        console.log(fieldValue);

        res.status(200).json({fieldValue});

    } catch (error) {
        console.log(error);

        res.status(500).json({ message: 'Error fetching field values' });
        
    }
}