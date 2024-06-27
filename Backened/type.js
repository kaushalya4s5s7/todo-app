const z = require ("zod");


const taskSchema = z.object({
    title : z.string(),
    description : z.string()
})

const localSchema = z.object({
    id: z.string(),
    completed : z.boolean()
})

module.exports ={
    taskSchema : taskSchema,
    localSchema : localSchema
}
