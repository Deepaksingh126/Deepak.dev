const Message = () => {
    return (
        <div className="card">
            <h2>Send me a message</h2>
            <form action="https://api.web3forms.com/submit" method="POST">
                {/* Replace with your Access Key */}
                <input type="hidden" name="access_key" value="e23227b3-e9b3-4f57-a2a8-82469f3f248f" />
                <input name="name" type="text" placeholder="Your Name" required />
                <input name="email" type="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Message" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Message;