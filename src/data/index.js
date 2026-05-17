export const destinations = [
  { id: 1, name: '巴厘岛', location: '印度尼西亚', desc: '热带天堂，拥有壮丽的海滩、寺庙和梯田景观。', price: 5999, rating: 4.8, badge: '热门推荐', badgeClass: '', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop' },
  { id: 2, name: '京都', location: '日本', desc: '千年古都，感受传统文化与现代文明的完美融合。', price: 4299, rating: 4.7, badge: '文化之旅', badgeClass: 'bg-green-500', img: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop' },
  { id: 3, name: '圣托里尼', location: '希腊', desc: '爱琴海上的明珠，蓝白相间的浪漫童话世界。', price: 8999, rating: 4.9, badge: '蜜月首选', badgeClass: 'bg-purple-600', img: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop' },
  { id: 4, name: '张家界', location: '中国湖南', desc: '奇峰三千，秀水八百，阿凡达取景地的绝美风光。', price: 2599, rating: 4.6, badge: '自然奇观', badgeClass: 'bg-orange-500', img: 'https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?w=400&h=300&fit=crop' },
]

export const services = [
  { id: 1, icon: 'fa-route', title: '定制旅程', desc: '根据您的偏好和预算，量身打造专属旅行计划。' },
  { id: 2, icon: 'fa-hotel', title: '酒店预订', desc: '精选全球优质酒店与特色民宿，享受最优惠价格。' },
  { id: 3, icon: 'fa-plane', title: '机票服务', desc: '提供全球航班查询与预订服务，让出行更便捷。' },
  { id: 4, icon: 'fa-headset', title: '24小时客服', desc: '专业旅行顾问全天候在线，为您解决旅途中的任何问题。' },
]

export const stats = [
  { id: 1, icon: 'fa-globe-asia', count: 500, suffix: '+', label: '精选目的地' },
  { id: 2, icon: 'fa-user', count: 12000, suffix: '+', label: '满意旅客' },
  { id: 3, icon: 'fa-hotel', count: 150, suffix: '+', label: '合作酒店' },
  { id: 4, icon: 'fa-star', count: 98, suffix: '%', label: '好评率' },
]

export const testimonials = [
  { id: 1, text: '非常棒的旅行体验！行程安排合理，导游专业热情，住宿条件超出预期。强烈推荐给所有喜欢旅行的朋友！', user: '张小明', avatar: 'https://i.pravatar.cc/100?img=11', location: '北京' },
  { id: 2, text: '第一次尝试定制旅行，效果惊艳！每一个细节都考虑得很周到，让我真正感受到了旅行的乐趣。明年还会再来！', user: '李芳', avatar: 'https://i.pravatar.cc/100?img=5', location: '上海' },
  { id: 3, text: '带着家人一起出游，老人和孩子都非常满意。特别是客服的贴心服务，让我们完全没有后顾之忧。五星好评！', user: '王建国', avatar: 'https://i.pravatar.cc/100?img=12', location: '广州' },
]

export const footerLinks = {
  destinations: ['国内热门', '亚洲风情', '欧美远途', '海岛度假'],
  support: ['帮助中心', '取消政策', '隐私条款', '用户协议'],
  contact: [
    { icon: 'fa-phone', text: '400-888-9999' },
    { icon: 'fa-envelope', text: 'contact@traveler.com' },
    { icon: 'fa-map-marker-alt', text: '北京市朝阳区建国路88号' },
  ],
}
