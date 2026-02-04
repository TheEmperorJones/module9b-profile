function UserProfile() {
    const name = "John Brown";
    const bio = "Interests include:\n\n(1) the Bible; (2) the overthrow (by violence if necessary) of the evils of a slave state.";
    const profileImage = "https://upload.wikimedia.org/wikipedia/commons/1/15/1846-47_John_Brown_by_Augustus_Washington_%28without_frame%29.jpg";

    return (
    // Decided to shape this somewhat like a playing card
     <div style={{ maxWidth: '400px',
        margin: '20px auto', 
        padding: '32px', 
    // Added a nice big circle view like a collectable card
        borderRadius: '12px',
        boxShadow: '5px 5px 10px 2px rgba(0, 0, 0, 0.4)',
    // Would have preferred some kind of worn embellishments, but was beyond me
        backgroundColor: 'tan', 
        textAlign: 'center' }}>
    <img src={profileImage} alt={`${name}'s profile`} style={{ width: '300px', height: '300px', borderRadius: '50%', objectFit: 'cover', border: '4px solid rgb(183, 181, 187)', marginBottom: '16px' }} />
    {/* It's absurd, but used courier font because it somewhat replicates typewriter fonts */}
    <h1 style={{ fontSize: 60, fontFamily: 'courier'}}>{`${name}`}</h1>
    <p style={{ whiteSpace: 'pre-wrap', fontSize: 20, fontFamily: 'courier'}}>{bio}</p>
    </div>
)
}

export default UserProfile