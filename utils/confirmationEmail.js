export const confirmationEmail = (referralLink) => {
  return `
    <h1>Welcome to Waitlist Magic 🍕</h1>
    <p>Thanks for joining the waitlist!</p>
    <p>Your referral link: <strong>${referralLink}</strong></p>
    <p>Share it with friends to move up the list 😎</p>
  `;
};