import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

export function getHomedate(type,page) {
  return request({
    url: '/home/data',
    param: {
      type,
      page
    }
  })
}
