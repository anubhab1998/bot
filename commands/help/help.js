module.exports = ({
    name: "help",
    aliases: ['command',' Help','Help'],
    code: `$title[Help]
    $description[\`$getServerVar[prefix]play\` :- For a play a song
\`$getServerVar[prefix]pause\` :- For pause a song
\`$getServerVar[prefix]resume\` :- To resume a song
\`$getServerVar[prefix]skip\` :- To skip a song
\`$getServerVar[prefix]stop\` :- To stop a song
\`$getServerVar[prefix]volume\` :- To set volume
\`$getServerVar[prefix]np\` :- To Check a Now Playing Song
\`$getServerVar[prefix]queue\` :- To check the queue
\`$getServerVar[prefix]lyrics\` :- To Check lyrics of a song
]`
});