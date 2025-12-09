function capitalizeWords(input) {
    if (!input) return '';
    return input
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
  
function filterActiveUsers(users) {
    return Array.isArray(users) ? users.filter(u => u.active) : [];
}
  
function logAction(action, username) {
    if (!action || !username) return '';
    return `${username}: ${action}`;
}
  
module.exports = { capitalizeWords, filterActiveUsers, logAction };
  