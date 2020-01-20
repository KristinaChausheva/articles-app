import { OnInit } from '@angular/core';
import { Article } from "../models/article.model";
import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styleUrls: ['./articles.component.css']
  })

export class ArticlesComponent implements OnInit {
    articles: Article[];

    constructor() { }

    ngOnInit() {
        this.articles;

    }
}