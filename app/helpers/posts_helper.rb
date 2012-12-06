module PostsHelper
  def render_lorem_image
    image_tag("http://lorempixel.com/400/200/?#{rand(1000)}", :alt => "lorem")
  end
end
