import React from "react"
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";


const BlogPage = ({data}) => (
    <Layout>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
            <div key={post.node.id} >
                <h3>{post.node.frontmatter.title}</h3>
                <small>Posted By {post.node.frontmatter.author} on {post.node.frontmatter.date} </small>
                <br/>
                <br/>
                <Link to={post.node.frontmatter.path}>Read More</Link>
                <br/>
                <br/>
                <hr/>

            </div>
        ))}




    </Layout>
)
export const pageQuery = graphql`
 query BlogIndexPageQuery {
    allMarkdownRemark  {
        edges {
            node {
                id
                frontmatter{
                    path
                    title
                    date
                    author
                }
            }
        }
    }
 }
    

 `

export default BlogPage
