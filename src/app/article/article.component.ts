import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
<<<<<<< HEAD
	this.article = new Article("","",0);
=======
    article = new Article("","",0);
>>>>>>> deeb9151842ed419d46ee27ce9d74832d63c2143
  }
  
  voteUp(): boolean {
	this.article.voteUp();
	return false;
  }

  voteDown(): boolean {
	this.article.voteDown();
	return false;
  }

  ngOnInit(): void {
  }

}
