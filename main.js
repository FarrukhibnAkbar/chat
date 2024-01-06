const userList = document.querySelector(".user-list");

const users = [
  {
    nickname: "Elon",
    message: "How are you",
    reply: "I am fine!",
    unreadMessage: 443,
    date: "14 feb, 2024",
    icon: "https://cdn-icons-png.flaticon.com/512/3781/3781973.png",
  },
  {
    nickname: "Anna",
    message: "How are you",
    reply: "I am fine!",
    unreadMessage: 34,
    date: "14 feb, 2024",
    icon: "https://w7.pngwing.com/pngs/4/736/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon-thumbnail.png",
  },
  {
    nickname: "Jef Bezos",
    message: "How are you",
    reply: "I am fine!",
    unreadMessage: 42,
    date: "14 feb, 2024",
    icon: "https://static.vecteezy.com/system/resources/previews/019/896/008/original/male-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png",
  },
  {
    nickname: "Palonchi",
    message: "Man o'zbekman o'zimga bekman",
    reply: "nima qilay hay",
    unreadMessage: 999,
    date: "09:18",
    icon: "https://i.pinimg.com/474x/32/3b/c2/323bc2e28f35a760b8d7afe48f3ffe48.jpg",
  },
];

const layout = `
<div class="profile-info">
  <div class="image-container">
    <div class="avatar"></div>
    <div class="user-info">
      <h6 class="user-nickname">Elon</h6>
      <p class="message-review">How are you?</p>
      <p class="message-reply-review">Okey</p>
    </div>
  </div>
  <div class="indicator">
    <h6 class="date">Fri</h6>
    <div class="unread-message-count">2</div>
  </div>
</div>`;

users.forEach((item) => {
  const user = document.createElement("div");
  userList.appendChild(user);
  user.innerHTML = `<div class="profile-info">
  <div class="image-container">
  <img
  class="avatar"
  src="${item.icon}"
  alt="avatar"
/>
    <div class="user-info">
      <h6 class="user-nickname">${item.nickname}</h6>
      <p class="message-review">${item.message}</p>
      <p class="message-reply-review">${item.reply}</p>
    </div>
  </div>
  <div class="indicator">
    <h6 class="date">${item.date}</h6>
    <div class="unread-message-count">${item.unreadMessage}</div>
  </div>
  </div>`;
});
