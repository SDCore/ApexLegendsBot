const config = require("./config.json");
const legends = require("./data/legends.json");
const guns = require("./data/guns.json");
const drops = require("./data/drops.json");
const snoowrap = require("snoowrap");
const fs = require("fs");
const moment = require("moment");
const dedent = require("dedent-js");

const r = new snoowrap({
	userAgent: `${config["reddit"]["userAgent"]}`,
	clientId: `${config["reddit"]["clientId"]}`,
	clientSecret: `${config["reddit"]["clientSecret"]}`,
	username: `${config["reddit"]["username"]}`,
	password: `${config["reddit"]["password"]}`,
});

async function submissionStart(post) {
	(function loop() {
		var now = new Date();
		if (
			now.getDay() === 1 &&
			now.getHours() === 8 &&
			now.getMinutes() === 00
		)
			mondayPost();
		if (
			now.getDay() === 2 &&
			now.getHours() === 8 &&
			now.getMinutes() === 00
		)
			tuesdayPost();
		if (
			now.getDay() === 3 &&
			now.getHours() === 8 &&
			now.getMinutes() === 00
		)
			wednesdayPost();
		if (
			now.getDay() === 4 &&
			now.getHours() === 8 &&
			now.getMinutes() === 00
		)
			thursdayPost();
		if (
			now.getDay() === 5 &&
			now.getHours() === 8 &&
			now.getMinutes() === 00
		)
			fridayPost();

		async function mondayPost() {
			// Picking random legend from list
			const randomLegend = Math.floor(Math.random() * legends.length);

			var MondayPost = {
				title: `Legend Monday: ${
					legends[randomLegend]
				} | ${moment().format(`MMMM Do, YYYY`)}`,
				text: dedent(`Welcome to Legend Monday! This discussion thread focuses specifically on a randomly chosen legend.\n
                Today's Legend discussion is focused around: **${legends[randomLegend]}**!\n
                Discuss what you like or dislike about this Legend; how it compares to others; playstyle tips and techniques; or anything else that you think would be of value to discuss regarding **${legends[randomLegend]}**.\n
                Moderation in daily threads is more relaxed, but please stay on topic, be respectful of others and remember our [rules](https://www.reddit.com/r/apexlegends/wiki/rules)\n
                \n---\nSuggestions or feedback for these daily posts? Message [Modmail](https://www.reddit.com/message/compose?to=%2Fr%2Fapexlegends)!`),
				sendReplies: false,
			};

			r.getSubreddit(config["reddit"]["subreddit"])
				.submitSelfpost({
					title: MondayPost.title,
					text: MondayPost.text,
					sendReplies: MondayPost.sendReplies,
				})
				.then((p) => {
					console.log(p);
				})
				.catch((e) => console.log(`Error on posting ${e}`));

			console.log(
				`[${moment().format(
					`h:mm:ss a`
				)}] Successfully posted Legend Monday`
			);
		}

		async function tuesdayPost() {
			var TuesdayPost = {
				title: `Game/Update Discussion | ${moment().format(
					`MMMM Do, YYYY`
				)}`,
				text: dedent(`Welcome to the Tuesday **Game and Update Discussion thread!** This thread is your place for specific discussion on any recent development updates and general thoughts on the state of the game.\n
            Discuss what you like or dislike about recent updates, any flaws or features you would like to see in-game, your thoughts on the game's current state and meta, and more! *Please note that this thread will be unstickied if there is an update released and all discussion of the update will be redirected to the megathread for that day*\n
            Moderation in daily threads is more relaxed, but please stay on topic, be respectful of others and remember our [rules](https://www.reddit.com/r/apexlegends/wiki/rules)\n
            \n---\nSuggestions or feedback for these daily posts? Message [Modmail](https://www.reddit.com/message/compose?to=%2Fr%2Fapexlegends)!`),
				sendReplies: false,
			};
			r.getSubreddit(config["reddit"]["subreddit"])
				.submitSelfpost({
					title: TuesdayPost.title,
					text: TuesdayPost.text,
					sendReplies: TuesdayPost.sendReplies,
				})
				.then((p) => {
					console.log(p);
				})
				.catch((e) => console.log(`Error on posting ${e}`));

			console.log(
				`[${moment().format(
					`h:mm:ss a`
				)}] Successfully posted Update Tuesday`
			);
		}

		async function wednesdayPost() {
			// Picking random gun from list
			const randomGun = Math.floor(Math.random() * guns.length);

			var WednesdayPost = {
				title: `Weapon Wednesday: ${
					guns[randomGun]
				} | ${moment().format(`MMMM Do, YYYY`)}`,
				text: dedent(`Welcome to **Weapon Wednesday!** This discussion thread focuses specifically on a randomly chosen weapon.\n
            Today's Weapon discussion is focused around: **${guns[randomGun]}**!\n
            Discuss what you like or dislike about this weapon; how it compares to other weapons; your favorite skins; changes that you think would be beneficial; or anything else that you think would be of value to discuss regarding the **${guns[randomGun]}**.\n
            Moderation in daily threads is more relaxed, but please stay on topic, be respectful of others and remember our [rules](https://www.reddit.com/r/apexlegends/wiki/rules)\n
            \n---\nSuggestions or feedback for these daily posts? Message [Modmail](https://www.reddit.com/message/compose?to=%2Fr%2Fapexlegends)!`),
				sendReplies: false,
			};

			r.getSubreddit(config["reddit"]["subreddit"])
				.submitSelfpost({
					title: WednesdayPost.title,
					text: WednesdayPost.text,
					sendReplies: WednesdayPost.sendReplies,
				})
				.then((p) => {
					console.log(p);
				})
				.catch((e) => console.log(`Error on posting ${e}`));

			console.log(
				`[${moment().format(
					`h:mm:ss a`
				)}] Successfully posted Weapon Wednesday`
			);
		}

		async function thursdayPost() {
			// Picking random drop from list
			const randomDrop = Math.floor(Math.random() * drops.length);

			var ThursdayPost = {
				title: `Mixtape Thursday | ${moment().format(`MMMM Do, YYYY`)}`,
				text: dedent(`Welcome to Mixtape Thursday! Discuss everything Mixtape. Tips, tricks, and more available in this thread!\n
                With Apex Legends: Revelry, [Respawn announced Mixtape](https://www.ea.com/games/apex-legends/news/revelry-season-game-updates), a rotating list of Gun Run, Control, and the new mode Team Deathmatch. Use this thread to discuss Mixtape as a whole, and the individual modes. What could be improved for Mixtape? Longer times for each rotation? Different maps? Maybe you'd like to see different gamemodes in Mixtape? Discuss it all here!\n
                Moderation in daily threads is more relaxed, but please stay on topic, be respectful of others and remember our [rules](https://www.reddit.com/r/apexlegends/wiki/rules)\n
                \n---\nSuggestions or feedback for these daily posts? Message [Modmail](https://www.reddit.com/message/compose?to=%2Fr%2Fapexlegends)!`),
				sendReplies: false,
			};

			r.getSubreddit(config["reddit"]["subreddit"])
				.submitSelfpost({
					title: ThursdayPost.title,
					text: ThursdayPost.text,
					sendReplies: ThursdayPost.sendReplies,
				})
				.then((p) => {
					console.log(p);
				})
				.catch((e) => console.log(`Error on posting ${e}`));

			console.log(
				`${moment().format(
					`h:mm:ss a`
				)}] Successfully posted Arena Mode Thursday`
			);
		}

		async function fridayPost() {
			var FridayPost = {
				title: `Free Talk Weekend | ${moment().format(
					`MMMM Do, YYYY`
				)}`,
				text: dedent(`Welcome to **Free Talk** Weekend! There are no specific discussion topics for Weekends. As such, moderation is more relaxed regarding specific and content within the thread. 

            What's on your mind? How's your week in Apex? How have your Apex games been going lately? Want to show off your stats or banners? Need some help or want to give out some pointers? Anything you want to talk about that wasn't brought up in a previous thread or did you miss a specific discussion topic earlier this week? Talk about it here!

            This thread also serves as a group finder!\n

            Looking to grind out battle passes or events? How about a squad for some sweaty ranked games? Or maybe you're just looking for a chill bud for casual? If so, look no further!\n

            Helpful information to include in your LFG comment:\n
            - Platform\n
            - Username\n
            - Game Mode (casual/duos/ranked/firing range)\n
            - If ranked, what rank?\n
            - Time Zone/Region\n
            - Special requests (chill, sweaty tryhard, mic/no mic, Discord, 1v1, etc..)\n
            Alternatively, you can check out our [Discord](https://discord.gg/apexlegends), which has dedicated LFG channels, or our LFG subreddit r/ApexLFG.\n
            Moderation in daily threads is more relaxed, but please stay on topic, be respectful of others and remember our [rules](https://www.reddit.com/r/apexlegends/wiki/rules)\n
            \n---\nGot any feedback for these daily posts? Message [Modmail](https://www.reddit.com/message/compose?to=%2Fr%2Fapexlegends) with any valid suggestions and feedback!`),
				sendReplies: false,
			};

			r.getSubreddit(config["reddit"]["subreddit"])
				.submitSelfpost({
					title: FridayPost.title,
					text: FridayPost.text,
					sendReplies: FridayPost.sendReplies,
				})
				.then((p) => {
					console.log(p);
				})
				.catch((e) => console.log(`Error on posting ${e}`));

			console.log(
				`${moment().format(
					`h:mm:ss a`
				)}] Successfully posted Free Talk Friday`
			);
		}

		now = new Date(); // allow for time passing
		var delay = 60000 - (now % 60000); // exact ms to next minute interval
		setTimeout(loop, delay);
		console.log(`[${moment().format("h:mm:ss a")}] Checking...`);
	})();
}

submissionStart();
console.log(
	`[${moment().format(
		`h:mm:ss a`
	)}] Sign in complete, performing loop function.`
);
