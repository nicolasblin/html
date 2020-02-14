module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    owner: DataTypes.STRING,
    genre: DataTypes.STRING,
    paid: DataTypes.BOOLEAN,
    date: DataTypes.DATE,
    city: DataTypes.STRING,
    eventImageUrl: DataTypes.STRING,
    payLink: DataTypes.STRING,
    description: DataTypes.TEXT
  })

  Event.associate = function (models) {
  }

  return Event
}
