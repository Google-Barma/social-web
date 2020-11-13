import profile from "../images/profile-logo.jpg";

export default function Profile() {
  return (
    <section className="profile__section">
      <div className="profile">
        <div className="profile__image-wrapper">
          <img
            className="profile__logo"
            src={profile}
            alt="profile logo"
            width="100"
          />
        </div>
        <p className="profile__description">blabalbal</p>
      </div>
    </section>
  );
}
