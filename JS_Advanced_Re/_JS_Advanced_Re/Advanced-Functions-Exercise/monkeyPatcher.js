let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

function solution(arg) {
    let post = this;
    let command = arg;
    let result = [];

    let commands = {
        upvote() {
            post['upvotes'] += 1;
        },
        downvote() {
            post['downvotes'] += 1;
        },

        score() {
            let scoredPost = {
                upvotes: post['upvotes'],
                downvotes: post['downvotes'],
                totalScore: post['upvotes'] - post['downvotes'],
            }

            let rating = '';
            let totalVotes = post['upvotes'] + post['downvotes'];

            if (totalVotes > 50) {
                let addedNumb = 0;
                post['upvotes'] >= post['downvotes'] ? addedNumb = post['upvotes'] * 0.25 :
                    addedNumb = post['downvotes'] * 0.25;
                addedNumb = Math.ceil(addedNumb);
                scoredPost['upvotes'] += addedNumb;
                scoredPost['downvotes'] += addedNumb;
            }

            if (totalVotes >= 10) {
                if (post['upvotes'] / (totalVotes) > 0.66) {
                    rating = 'hot';
                } else {
                    if (post['upvotes'] >= post['downvotes']) {
                        if (totalVotes > 100) {
                            rating = 'controversial';
                        } else {
                            rating = 'new';
                        }
                    } else {
                        rating = 'unpopular';
                    }
                }
            } else {
                rating = 'new';
            }

            result.push(scoredPost['upvotes']);
            result.push(scoredPost['downvotes']);
            result.push(scoredPost['totalScore']);
            result.push(rating);

        }
    }

    if (command == 'upvote') {
        commands.upvote();
    } else if (command == 'downvote') {
        commands.downvote();
    } else if (command == 'score') {
        commands.score();
        return result;
    }
}


solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = console.log(solution.call(post, 'score')); // [127, 127, 0, 'controversial']

for (let index = 0; index < 50; index++) {
    solution.call(post, 'downvote'); // (executed 50 times)   
}

score = console.log(solution.call(post, 'score')); // [139, 189, -50, 'unpopular']