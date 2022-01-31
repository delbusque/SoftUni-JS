let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};

function solution(ar) {

    let status = '';

    let score = () => {
        let currUps = this.upvotes;
        let currDowns = this.downvotes;

        let check = () => {
            if (this.upvotes + this.downvotes > 50) {
                if (this.upvotes >= this.downvotes) {
                    let addedNum = Math.ceil(this.upvotes * 0.25);
                    currUps += addedNum;
                    currDowns += addedNum;
                } else {
                    let addedNum = Math.ceil(this.downvotes * 0.25);
                    currUps += addedNum;
                    currDowns += addedNum;
                }
            }

            if (currUps / currDowns >= 2) {
                status = 'hot';
            } else if (currUps / currDowns < 2 && currUps >= currDowns) {
                if (currDowns + currUps > 100) {
                    status = 'controversial'
                }
            } else if (currDowns > currUps) {
                if (currUps + currDowns >= 10) {
                    status = 'unpopular';
                } else {
                    status = 'new';
                }
            } else {
                status = 'new';
            }
        };

        check();

        let forumLog = [];

        forumLog.push(currUps);
        forumLog.push(currDowns);
        forumLog.push(currUps - currDowns);
        forumLog.push(status);

        return console.log(forumLog);;
    }

    if (ar == 'upvote') {
        this.upvotes += 1;
    } else if (ar == 'downvote') {
        this.downvotes += 1;
    } else if (ar = 'score') {
        score();
    }
}



solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote'); // (executed 50 times)
score = solution.call(post, 'score'); // [139, 189, -50, 'unpopular']