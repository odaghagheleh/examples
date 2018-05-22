INSERT INTO contentmodels (modelid, contenttype, descr, model, stylesheet) VALUES (10001, 'CNG', 'Full - Default', '<article>
  <h1>$content.Title.text</h1>
#if ( $content.Picture.getImagePath("0") != "" )
<figure class="well well-small text-center">
  <img src="$content.Picture.getImagePath("0")" alt="$content.Picture.text" />
  #if ( $content.Caption.text != "" )
  <figcaption><p class="margin-medium-all">$content.Caption.text</p></figcaption>
  #end
</figure>
#end
#if ( $content.MainBody.text != "" )
$content.MainBody.text
#end
#if ($content.Attaches.size()>0)
  <h2>$i18n.getLabel("CNG_ATTACHMENTS")</h2>
  <ul>
  #foreach ($item in $content.Attaches )
    <li><a href="$item.attachPath">$item.text</a></li>
  #end
  </ul>
#end
#if ($content.Links.size()>0)
  <h2>$i18n.getLabel("CNG_LINKS")</h2>
  <ul>
  #foreach ($item in $content.Links)
    <li><a href="$item.destination">$item.text</a></li>
  #end
  </ul>
#end
</article>', NULL);
INSERT INTO contentmodels (modelid, contenttype, descr, model, stylesheet) VALUES (10011, 'CNG', 'Lists - Default', '<div class="search-result">
  <h3><a href="$content.contentLink">$content.Title.text</a></h3>
  <a class="search-link" href="$content.contentLink">$content.contentLink</a>
#if ( $content.Abstract.text != "" )
  <p>
    $content.Abstract.text
  </p>
#end
</div>
<div class="hr-line-dashed"></div>', NULL);
INSERT INTO contentmodels (modelid, contenttype, descr, model, stylesheet) VALUES (10012, 'CNG', 'Hero Unit + Picture', '<article>
  <div class="hero-unit span6">
  <h1>$content.Title.text</h1>
  #if ( $content.Abstract.text != "" )
  $content.Abstract.text
  #end
  #if ( $content.Links.size() != 0 )
  #set ( $link = $content.Links.get(0) )
  <p><a href="$link.destination" class="btn btn-primary btn-large">$link.text</a></p>
  #end
</div>
#if ( $content.Picture.getImagePath("0") != "" )
<div class="span4 well well-small">
<figure>
  <img src="$content.Picture.getImagePath("0")" alt="$content.Picture.text" />
  #if ( $content.Caption.text != "" )
  <figcaption class="text-center"><p class="margin-medium-all">$content.Caption.text</p></figcaption>
  #end
</figure>
</div>
#end
</article>', NULL);
INSERT INTO contentmodels (modelid, contenttype, descr, model, stylesheet) VALUES (10013, 'CNG', 'Lists - Picture', '<article>
  <h2>$content.Title.text</h2>
#if ( $content.Picture.getImagePath("0") != "" )
<figure>
  <img src="$content.Picture.getImagePath("0")" alt="$content.Picture.text" />
  #if ( $content.Caption.text != "" )
  <figcaption class="text-center"><p class="margin-medium-all">$content.Caption.text</p></figcaption>
  #end
</figure>
#end
<p class="text-right"><a class="btn" href="$content.contentLink">$i18n.getLabel("CNG_READ_MORE")</a></p>
</article>', NULL);
INSERT INTO contentmodels (modelid, contenttype, descr, model, stylesheet) VALUES (1, 'OPO', 'one person one mortgage', '<div class="col-md-6">
<p class="title-excercise editContent" data-content-id="$content.getId()" data-attr-id="title">$content.title.text</p>
<p class="subtitle-excercise">$content.subtitle.text</p>
</div>
<div class="col-md-6">
<p class="abstract-excercise">$content.abstract.text</p>
<div class="lightbar"></div>
</div>
<style>
.title-excercise{
font-size:32px;
width:250px;
line-height:32px;
}
.subtitle-excercise{
font-size:16px; 
}
.abstract-excercise{
font-size:16px;
line-height:22px; 
}
.lightbar{
border: 2px solid #337ab7;
width: 41px;
margin: 18px 0 0 0;
}
</style>', NULL);