// import mongoose from 'mongoose'
import Router from 'koa-router'
import Post from '../models/post'
import Message from '../models/message'
import timeago from 'timeago.js'
import jwt from 'jsonwebtoken'
import config from '../config'

const router = new Router()
const isInclude = (arr, obj) => (arr.indexOf(obj) !== -1)

// gotta add a check if user's logged in, for head-login
router.get('/', async (ctx, next) => {
  let cookies = ctx.headers.cookie
  let unReadMsg = 0
  let decoded = {}

  if (cookies) {
    let parsedCookies = cookies.split('; ')

    for (let str of parsedCookies) {
      if (str.includes('jwtToken')) {
        let jwtToken = str.split('=')[1]
        if (jwtToken) {
          decoded = await jwt.verify(jwtToken, config.token)
          let message = await Message.find({recipient: decoded.username, isRead: { $nin: [decoded.username] }})
          console.log('messsage', message, message.length)
          unReadMsg = message.length
        }
      }
    }
  }

  console.log('decoded1', decoded)
  let renderData = await Post.find({}).sort({$natural: -1})
  let final = await fixedData(renderData, decoded)
  console.log('decoded2', decoded)

  await ctx.render('index', {data: final, username: decoded.username, unReadMsg: unReadMsg})
})

async function fixedData (posts, decoded) {
  for (let post of posts) {
    let uploadDate = post.uploadDate
    post.timeAgo = timeago().format(uploadDate.getTime())
    post.classes.push(post.gender, post.market)

    if (decoded) {
      if (isInclude(post.like.likedUsers, decoded.username)) {
        console.log(true)
        post.liked = true
      } else {
        console.log('asdfasdfadfasdfasdf', false)
        post.liked = false
      }
    }
  }

  return posts
}

export default router
