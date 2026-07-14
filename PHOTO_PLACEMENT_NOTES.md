# Photo Placement Notes

## Editorial Rules

- The home page uses the clearest action, research, team, and founder images. These
  placements need to explain the organization quickly, so visual clarity matters
  more than chronology.
- Every submitted event and activity photo appears in the gallery. The order moves
  from environmental action to research, service, fundraising, culture,
  recognition, and team life.
- Portraits stay on the Team page. This keeps names and roles attached to faces and
  avoids mixing profile photos into the event record.
- Very wide group images use contain-fit in the gallery. A uniform cover crop would
  remove people standing at the edges.
- A few strong event images appear both in a featured page position and in the
  gallery. The featured placement tells the story; the gallery preserves the full
  visual record.

## Placeholder and Copy Decisions

- The five home-page frames and both Impact-page frames are filled because each now
  has a submitted image that directly supports the surrounding copy.
- All gallery placeholders are removed. Forty-five event photos provide enough
  material for a complete gallery, so additional empty frames would make a finished
  archive look incomplete.
- Mathew Jiang keeps the only leadership placeholder. No submitted portrait matches
  his name, and assigning an unverified face would be worse than showing the missing
  asset honestly.
- The small home collage no longer repeats a second water-sampling image. It pairs
  the poster presentation with rafting to show both research communication and team
  culture, while the larger research section retains the field-sampling image where
  viewers can read its details.
- "Grant celebration" is changed to "Volunteer recognition ceremony." The Shine A
  Light photo clearly shows certificates, but the image does not establish that a
  grant was awarded.
- "Processing water samples in the lab" replaces a generic sampling label on the
  Impact page because the selected image shows laboratory processing, not collection
  in the field.
- Captions use the supplied filenames as factual context, then describe only what is
  visible. They avoid inventing dates, amounts, partner relationships, or outcomes
  that the photos cannot verify.

## Featured Placements

| File | Placement | Reason |
| --- | --- | --- |
| `firststep_logo.png` | Navbar | It is the submitted official mark and replaces the temporary FS tile. |
| `paddle_cleanup.png` | Home hero, social preview, gallery | It combines water, service, action, and a clear subject in a strong horizontal frame. |
| `microplasitscs_poster_presentation.jpg` | Home hero collage, gallery | It shows the public communication side of the research program. |
| `team_bonding_rafting.jpg` | Home hero collage, gallery | Its square composition fits the small slot and adds team energy without duplicating a formal group photo. |
| `microplastics_sampling_picture.jpg` | Home research section, gallery | It documents field preparation beside the watershed and supports the field-sampling copy. |
| `founder_picture.jpg` | Founder quote | The portrait includes the First Step visor and belongs beside the founder's words. |
| `shine_a_light_ceremony.png` | Impact recognition card, gallery | Certificates make this the clearest submitted recognition image. |
| `microplastics_research.jpg` | Impact research section, gallery | Laboratory processing complements the field photo and shows the next step in the research workflow. |

## Portrait Placements

Submitted portraits are assigned to Dennis Xu, Angela Zhou, Mason Cao, Brady Zhou,
Chloe Lin, Sophie Zhou, Nick Xu, Mitchell Kuang, Andrew Kuang, Claire Ling, Hannah
Gao, Eric Lin, and Julia Ding. Nick Xu and Mitchell Kuang retain their shared role
and display two portraits in one card.

Eric Lin is listed as VP of Tree Planting. Julia Ding is listed as VP of Animal
Care. Kevin Fan remains in the general member roster but is not assigned either
leadership role. Mathew Jiang keeps a labeled placeholder until a matching portrait
is added. The submitted `sophiazhou.jpg` file is assigned to Sophie Zhou because it
is the only submitted Zhou portrait without another matching leadership name.
Julia's supplied description is split at the semicolon into two responsibilities so
the leadership card remains easy to scan while preserving the wording.

Portraits use a compact 4:5 crop so leadership cards stay scannable. Nick Xu and
Mitchell Kuang display side by side because their role is already represented by one
shared card. Faces are biased slightly above center instead of centered vertically,
which leaves less empty space above the head in a short portrait frame.

## Gallery Coverage

The gallery contains all 45 submitted event and activity files. Headshots, the
founder portrait, and the logo are omitted from the gallery because each has a more
specific contextual placement elsewhere on the site. No submitted file is unused.

The sequence is thematic rather than alphabetical: environmental work first,
research second, community service and fundraising next, cultural programs after
that, then recognition and team life. This makes the page read as an account of what
First Step does instead of a file dump. The unusually wide Lake Lanier, CFF,
Salvation Army, summer charity, and recognition group images use contain-fit so no
volunteer is cut from the edges. All other gallery images use cover-fit to maintain
the existing photo-wall rhythm.

## Technical and Accessibility Decisions

- Every image has specific alt text. The navbar logo uses empty alt text because the
  adjacent "First Step Team" label already provides the same information, avoiding
  duplicate screen-reader output.
- The paddle-cleanup image is marked as a priority image only in the home hero. The
  remaining images stay lazy-loaded through Next Image so the 45-photo gallery does
  not request the full archive at once.
- The paddle-cleanup image also becomes the social-sharing preview because its wide
  composition and clear action remain legible in link cards.
- Future uploads should use descriptive filenames without spaces. The existing
  `eric lin.png` path is preserved to avoid renaming a submitted source file, and the
  framework build confirms that the encoded path works correctly.
