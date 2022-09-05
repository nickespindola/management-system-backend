
// =================================== GENERAL CRUD ===================================

// List Model
async function listModel(req, res, models, populate) {
    try {
        const listModels = await models.find().populate(populate);
        if (listModels) {
            res.json(listModels);
        }
    } catch (error) {
        res.status(401).send(error);
    }
}

// Register Model
async function registerModel(req, res, models) {
    try {
        let model = new models(req.body)

        const newModel = await model.save()

        if (newModel) {
            res.status(201).send({ message: 'Registrado com sucesso.' })
        } else {
            res.status(500).send({ message: `${err.message} - falha ao realizar registro.` });
        }

    } catch (error) {
        res.status(401).send(error);
    }

}

// Edit Model
async function editModel(req, res, models) {
    try {
        const { id } = req.params
        const editCurrentModel = await models.findByIdAndUpdate(id, { $set: req.body })

        if (editCurrentModel) {
            res.status(200).send({ message: 'Atualizado com sucesso.' })
        } else {
            res.status(500).send({ message: err.message })
        }

    } catch (error) {
        res.status(401).send(error);
    }
}

// Delete Model
async function deleteModel(req, res, models) {
    try {
        const id = req.params.id
        const deleteCurrentModel = await models.findByIdAndDelete(id)

        if (deleteCurrentModel) {
            res.status(200).send({ message: 'Elemento deletado com sucesso.' })
        } else {
            res.status(500).send({ message: err.message })
        }

    } catch (error) {
        res.status(401).send(error);
    }
}

const crud = {
    listModel,
    registerModel,
    editModel,
    deleteModel
}

export default crud
