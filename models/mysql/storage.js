const Storage = sequelize.define(
    "storages",
{ 

 url: {
    type: DataTypes.STRING,
    allowWNull: false, 
 },
 filename: {
    type: DataTypes.NUMBER,
 }
},
 {
 timestamps:true,
 },

);

module.exports = Storage;