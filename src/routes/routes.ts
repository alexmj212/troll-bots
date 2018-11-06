// var appRouter = function (app) {
//     app.get("/", function (req, res) {
//         if(process.env.PORT === "3000") {
//             res.status(200).send('it works !');
//         } else {
//             res.redirect('http://alexmj212.github.io/trollbots/');
//         }
//     });
// }

// module.exports = appRouter;


/*
  // Redirect the root web page to repo page.
$app->get(
    '/',
    function () {
        header('Location: http://alexmj212.github.io/trollbots/');
        exit();
    }
);

// Define 'triggered' endpoint.
$app->post(
    '/triggerbot/',
    function () use ($app) {
        $payload = new Lib\Payload($app->request->post());
        if (Lib\Bot::verifyToken('triggerbot', $payload->getToken()) === true) {
            $triggerbot = new Bots\TriggerBot($payload);
        } else {
            echo Lib\Post::INVALID_TOKEN;
        }
    }
);

// Define 'channelpolice' endpoint.
$app->post(
    '/channelpolicebot/',
    function () use ($app) {
        $payload = new Lib\Payload($app->request->post());
        if (Lib\Bot::verifyToken('channelpolicebot', $payload->getToken()) === true) {
            $channelpolicebot = new Bots\ChannelPoliceBot($payload);
        } else {
            echo Lib\Post::INVALID_TOKEN;
        }
    }
);

// Define 'punbot' endpoint.
$app->get(
    '/punbot-auth/',
    function () use ($app) {
        $punbotauth = new Auth\OAuth_Slack($app->request->get(), 'Pun Bot');
        $punbotauth->requestSlackAuth();
    }
);
$app->post(
    '/punbot/',
    function () use ($app) {
        $payload = new Lib\Payload($app->request->post());
        if (Lib\Bot::verifyToken('punbot', $payload->getToken()) === true) {
            $punbot = new Bots\PunBot($payload);
        } else {
            echo Lib\Post::INVALID_TOKEN;
        }
    }
);

// Define 'dkpbot' endpoint.
$app->get(
    '/dkpbot-auth/',
    function () use ($app) {
        $dkpbotauth = new Auth\OAuth_Slack($app->request->get(), 'DKP Bot');
        $dkpbotauth->requestSlackAuth();
    }
);
$app->post(
    '/dkpbot/',
    function () use ($app) {
        $payload = new Lib\Payload($app->request->post());
        if (Lib\Bot::verifyToken('dkpbot', $payload->getToken()) === true) {
            $dkpbot = new Bots\DKPBot($payload);
        } else {
            echo Lib\Post::INVALID_TOKEN;
        }
    }
);

// Define 'sarcasmbot' endpoint.
$app->post(
    '/sarcasmbot/',
    function () use ($app) {
        $payload = new Lib\Payload($app->request->post());
        if (Lib\Bot::verifyToken('sarcasmbot', $payload->getToken()) === true) {
            $sarcasmbot = new Bots\SarcasmBot($payload);
        } else {
            echo Lib\Post::INVALID_TOKEN;
        }
    }
);

// Define 'payrespectsbot' endpoint.
$app->get(
    '/payrespectsbot-auth/',
    function () use ($app) {
        $payrespectsbotauth = new Auth\OAuth_Slack($app->request->get(), 'Pay Respects Bot');
        $payrespectsbotauth->requestSlackAuth();
    }
);
$app->post(
    '/payrespectsbot/',
    function () use ($app) {
        $payload = new Lib\Payload($app->request->post());
        if (Lib\Bot::verifyToken('payrespectsbot', $payload->getToken()) === true) {
            $payrespectsbot = new Bots\PayRespectsBot($payload);
        } else {
            echo Lib\Post::INVALID_TOKEN;
        }
    }
);
$app->post(
    '/payrespectsbot-action/',
    function () use ($app) {
        $payload = new Lib\ActionPayload($app->request->post());
        if (Lib\Bot::verifyToken('payrespectsbot', $payload->getToken()) === true) {
            $payrespectsbot = new Bots\PayRespectsBot($payload);
        } else {
            echo Lib\Post::INVALID_TOKEN;
        }
    }
);*/