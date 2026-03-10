export default function Profile({profile}) {
    return (
        <div className="profile-container">
            <img src={profile} alt="Profile Image" className="profile-img" />
            <span className="profile-txt">James Harvey Baloto</span>
            <span className="profile-txt">Front-end Developer</span>
        </div>
    )
}