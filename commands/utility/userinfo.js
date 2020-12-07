module.exports = ({
    name: "userinfo",
    code: `$thumbnail[$userAvatar[$findUser[$message]]]
    $title[$username[$findUser[$message]]#$discriminator[$findUser[$message]] INFO]
$addField[]
$addField[Joined Date:;$memberJoinedDate[$findUser[$message]]]
$addField[Creation Date:;$creationDate[$findUser[$message]]]
$addField[User ID:;$findUser[$message]]
$addField[Userinfo:;$username[$findUser[$message]]#$discriminator[$findUser[$message]]]`
});

