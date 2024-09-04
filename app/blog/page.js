
import Image from 'next/image'
import './global.css'
import { blogPost } from '@/components/data'
import { ClockCircleOutlined } from '@ant-design/icons'


const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 px-8">
        <div className="blog-header">
            <h2><span>Learn all you need</span><br className='b-desktop-only'></br> from industry<br className='b-desktop-only'></br> professionals</h2>
            <h4>Articles from seasoned industry professionals to help you grow through your student years</h4>
        </div>
        <div className="bloglist-content">
          {
            blogPost.map((blog) => (
              <div className='bloglist-card'>
                <div className='bloglist-image-container'>
                  <Image src={blog.image} className='bloglist-images' />
                </div>
                <div className='bloglist-content-header'>
                  <h2>{blog.topic}</h2>
                  <p>{blog.description}</p>
                </div>
                <div className='bloglist-author'>
                  <div className='blogist-left'>
                    <div className='bla-image-container'>
                      <Image src={blog.authorImage} className='bla-image' />
                    </div>
                    <h5>{blog.author}</h5>
                  </div>
                  <div className='bla-time'>
                    <p>{blog.period}</p>
                    <ClockCircleOutlined />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
    </main>
  )
}

export default page