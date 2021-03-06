'use strict';

// Global Variables
const home = {};

home.body = `<div class="tags" id="tags" style="min-height:35px">    
        </div>
        <div id="post-list">
            <div class="loader">
                <img src="../icons/loader-2.gif">
            </div>
        </div>`;

home.post =`{{#each posts}}
    <div class="post" onclick="openLink('{{link}}')">
        <div class="post-info">
            <div class="author">
                <img src="{{authorImage}}" alt="">
            </div>
            <div>
                <p class="title">{{title}}</p>
                <p class="author-name">{{author}} </p>
            </div>
        </div>
        <div class="action-section">
            <div class="tags">
                {{#each tags}}
                    {{#if backgroundColor}}
                        <div class="tag" style="{{backgroundColor}}{{color}}" onclick="getTag(event,'{{name}}')">
                    {{else}}
                        <div class="tag" onclick="getTag(event,'{{name}}')">
                    {{/if}}
                            <p>{{name}}</p>
                        </div>
                {{/each}}
            </div>
            <div class="save-to-piggy">
                {{#if saved}}
                    <div class="pig-true" onclick="savePost(event,'{{@index}}')">
                {{else}}
                    <div class="pig-false" onclick="savePost(event,'{{@index}}')">
                {{/if}}
                    </div>
            </div>
        </div>
    </div>   
{{/each}}`;

home.tag =`{{#each tags}}
{{#if backgroundColor}}
    <div class="tag" style="{{backgroundColor}}{{color}}" onclick="getTag(event,'{{name}}')">
{{else}}
    <div class="tag" onclick="getTag(event,'{{name}}')">
{{/if}}
        <p>{{name}}</p>
    </div>  
{{/each}}`;

home.loader = `<div class="loader">
<img src="../icons/loader-2.gif">
</div>`;

module.exports = home;
