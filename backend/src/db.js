//this file connects to the remote prisma db and gives us the ability to query it with JS

const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://wineshop-prisma-7994345ac5.herokuapp.com/wine-supply-shop-prod/prod?headers={"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDc5NTcxODgsIm5iZiI6MTU0Nzg3MDc4OH0.mj1IPnkbGTob-8H_ZZ8VcsRerkvVLIw-hmvMt09F6kc"}',
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;