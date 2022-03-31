
function Member() {
    const { slug } = useParams();
    const member = BlogPosts[slug];
  
    const { name, description } = member;
  
    return (
      <div style={{ padding: 20 }}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    );
  }
export default Member