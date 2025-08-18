![Version](https://img.shields.io/badge/version-v3.0.0-blue)

<center><img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=Webhook%20Manager&fontSize=80&fontAlignY=35&animation=twinkling&fontColor=gradient"/></center>

A solution for using chat notification plugins such as Dink to track OSRS clan coffer transactions. This will dedupe messages captured by the broad chat filter and forward messages to your discord bot to send to a channel.

## Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/StackBot-Team/webhook-management.git
   cd webhook-management


2. **Install node packages**
   ```bash 
    npm i

## Hosting
1. **Link Repo to Vercel**
2. **Create a Free Upstash Redis Instance**
   * Create a Redis database
   * Copy ```REST URL``` and ```Auth token```
3. **Set These Evironment Variables:**
   * ```DISCORD_BOT_TOKEN```
   * ```TARGET_CHANNEL_ID```
   * ```UPSTASH_REST_URL```
   * ```UPSTASH_REST_TOKEN```
4. **Point Dink at your endpoint**
   *  ```https://example.vercel.app/api/incoming```

5. **Copy to Custom Chat Messages**
   * Ensure the "Clan Notifications" message type is enabled and add these message filters:
   ```bash
   * has deposited * coin* into the coffer.
   * has withdrawn * coin* from the coffer.
   ```