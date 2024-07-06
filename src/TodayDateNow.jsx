function TodayDateNow() {
    const now = new Date().toTimeString();
    const message = `Today date time is : ${now}`;
    return (
        <p>{message}</p>
    );
}
export default TodayDateNow;