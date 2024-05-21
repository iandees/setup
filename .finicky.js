const personal = {
    name: "Google Chrome",
    profile: "Profile 2",
};

const work = {
    name: "Google Chrome",
    profile: "Profile 1",
};

module.exports = {
  defaultBrowser: personal,
  handlers: [
    {
        match: [
            "docs.google.com",
            "notion.so",
        ],
        browser: work,
    },
  ],
};
