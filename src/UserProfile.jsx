function UserProfile() {
  const name = "Ava Edralin";
  const bio = "Part-time Retail Manager with 5+ years of experience in customer service and inventory management.";
  const profileImage = "https://cdn.inst-fs-iad-prod.inscloudgate.net/83264974-29ed-41b2-b6cc-9bb6d866bfa0?token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCIsImtpZCI6ImNkbiJ9.eyJyZXNvdXJjZSI6Ii84MzI2NDk3NC0yOWVkLTQxYjItYjZjYy05YmI2ZDg2NmJmYTAiLCJ0ZW5hbnQiOiJjYW52YXMiLCJpYXQiOjE3NzA1NzkxMTgsImV4cCI6MTc3MDY2NTUxOH0.pmsvbSsvzdQEd1ZWwtCTBOf_04d7DnVjzL_o-Z8wwQHlCUT8-tsZ4LIe7c76ALCDqwfw1n88juhVKwBgI00dJg&content_type=image%2Fpng";

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <img src={profileImage} alt={`${name}'s profile`} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '4px solid #e1e5e9', marginBottom: '16px' }} />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>{name}</h1>
      <p style={{ fontSize: '16px', color: '#555' }}>{bio}</p>
    </div>
  );
}

export default UserProfile;