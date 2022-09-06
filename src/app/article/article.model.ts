export class Article {
	title: string;
	link: string;
	votes: number;

	constructor(title: string, link: string, votes?: number) {
		this.title = title;
		this.link = link;
		this.votes = votes || 0;
	}
  
	voteUp(): boolean {
		this.votes += 1;
		return false;
  	}

  	voteDown(): boolean {
		this.votes -= 1;
		return false;
  	}

	// domain() is a utility function that extracts
	// the domain from a URL, which we'll explain shortly
	domain(): string {
		try {
			//e.g http://foo.com/path/to/bar
			const domainAndPath: string = this.link.split('//')[1];
			//e.g foo.com/path/to/bar
			return domainAndPath.split('/')[0];
		} catch (err) {
			return '';
		}
	}
}


